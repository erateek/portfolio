import nodemailer from "nodemailer";
import { PRICING_CONFIG } from "../../../config/pricing";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, selections, totalOriginal, totalDiscounted, lang } = body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return new Response(JSON.stringify({ error: "Server Config Error" }), { status: 500 });
    }

    // Resolve details for email
    const service = PRICING_CONFIG.services.find(s => s.id === selections.service);
    const features = selections.features.map(fId => {
        return PRICING_CONFIG.features[selections.service]?.find(f => f.id === fId);
    }).filter(Boolean);
    const timeline = PRICING_CONFIG.timelines.find(t => t.id === selections.timeline);

    const title = lang === 'ar' ? 'طلب عرض سعر جديد (خصم 90%)' : 'New Quote Request (90% OFF)';
    const currency = '$';

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #eee;">
        <h2 style="color: #6366f1; text-align: center;">${title} 🚀</h2>
        
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center; font-weight: bold;">
           🔥 90% DISCOUNT APPLIED
        </div>

        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
           <h3 style="margin-top: 0;">Client Details</h3>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <h3>Project Scope</h3>
            <p><strong>Service:</strong> ${service?.title?.en} (Base: ${currency}${service?.basePrice})</p>
            <p><strong>Timeline:</strong> ${timeline?.label?.en} (x${timeline?.multiplier})</p>
            <p><strong>Features:</strong></p>
            <ul>
                ${features.map(f => `<li>${f.label.en} (+${currency}${f.price})</li>`).join('')}
            </ul>
        </div>

        <div style="background: #eff6ff; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #64748b; text-decoration: line-through;">Original Price: ${currency}${totalOriginal}</p>
            <h1 style="margin: 5px 0; color: #16a34a;">${currency}${totalDiscounted}</h1>
            <p style="margin: 0; font-size: 14px; color: #16a34a;">(Final Pay)</p>
        </div>
      </div>
    `;

    // Send to Admin
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `💰 DEAL: ${name} (${currency}${totalDiscounted})`,
      html: htmlContent
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Quote API Error:", error);
    return new Response(JSON.stringify({ error: "Failed" }), { status: 500 });
  }
}
