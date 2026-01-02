import { ar } from '../../i18n/dictionaries';
import LegalTemplate from '../../components/templates/LegalTemplate';

export const metadata = {
  title: 'الشروط والأحكام | إراتيك',
  description: 'اتفاقية استخدام خدمات وكالة إراتيك وحقوق العملاء.',
};

export default function TermsPage() {
  return <LegalTemplate dict={ar} lang="ar" contentKey="terms" />;
}
