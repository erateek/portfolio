import { ar } from '../../i18n/dictionaries';
import FAQTemplate from '../../components/templates/FAQTemplate';

export const metadata = {
  title: 'الأسئلة الشائعة | إراتيك',
  description: 'إجابات على أسئلتك حول خدماتنا، الأسعار، وآلية العمل.',
};

export default function FAQPage() {
  return <FAQTemplate dict={ar} lang="ar" />;
}
