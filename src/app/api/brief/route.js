import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { 
      clientName, companyName, projectTitle, existingWebsite, targetAudience,
      brandName, primaryColor, secondaryColor, stylePreference,
      pagesRequired, features, contentStatus,
      domainPreference, competitors, launchDate, additionalNotes
    } = data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return NextResponse.json({ error: "Server Config Error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Template (Admin Notification)
    const emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #6366f1;">🚀 New Project Brief Received!</h2>
        <p>A new client has submitted a project brief form.</p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
        
        <h3 style="background: #f8fafc; padding: 10px; border-radius: 5px;">👤 Basics</h3>
        <ul>
          <li><strong>Client Name:</strong> ${clientName}</li>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Project Title:</strong> ${projectTitle}</li>
          <li><strong>Existing Website:</strong> ${existingWebsite || 'None'}</li>
          <li><strong>Target Audience:</strong> ${targetAudience || 'Not specified'}</li>
        </ul>

        <h3 style="background: #f8fafc; padding: 10px; border-radius: 5px;">🎨 Brand Identity</h3>
        <ul>
           <li><strong>Primary Color:</strong> <span style="display:inline-block; width: 15px; height: 15px; background: ${primaryColor}; border: 1px solid #ccc; border-radius: 3px; vertical-align: middle;"></span> ${primaryColor}</li>
           <li><strong>Secondary Color:</strong> <span style="display:inline-block; width: 15px; height: 15px; background: ${secondaryColor}; border: 1px solid #ccc; border-radius: 3px; vertical-align: middle;"></span> ${secondaryColor}</li>
           <li><strong>Style Preference:</strong> ${stylePreference}</li>
        </ul>

        <h3 style="background: #f8fafc; padding: 10px; border-radius: 5px;">📐 Scope & Content</h3>
        <ul>
           <li><strong>Content Status:</strong> ${contentStatus || 'Not specified'}</li>
           <li><strong>Pages:</strong> ${pagesRequired.join(', ') || 'Not specified'}</li>
           <li><strong>Key Features:</strong> ${features?.join(', ') || 'None'}</li>
           <li><strong>Additional Notes:</strong> <br/>${additionalNotes || 'N/A'}</li>
        </ul>

        <h3 style="background: #f8fafc; padding: 10px; border-radius: 5px;">🌐 Domain & Launch</h3>
        <ul>
           <li><strong>Preferred Domain:</strong> ${domainPreference || 'Not decided'}</li>
           <li><strong>Target Launch:</strong> ${launchDate || 'Flexible'}</li>
           <li><strong>Competitors:</strong> ${competitors || 'None'}</li>
        </ul>

      </div>
    `;

    // Send Email to Admin
    await transporter.sendMail({
      from: `"${clientName}" <${process.env.EMAIL_USER}>`, // Using admin email as sender to avoid spoofing
      to: process.env.EMAIL_USER,
      subject: `🎯 New Project Brief: ${companyName || clientName}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Brief API Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit brief' },
      { status: 500 }
    );
  }
}
