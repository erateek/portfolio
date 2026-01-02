import { ar } from '../../i18n/dictionaries';
import LegalTemplate from '../../components/templates/LegalTemplate';

export const metadata = {
  title: 'سياسة الخصوصية | إراتيك',
  description: 'تعرف على كيفية تعاملنا مع بياناتك وحمايتها في إراتيك.',
};

export default function PrivacyPage() {
  return <LegalTemplate dict={ar} lang="ar" contentKey="privacy" />;
}
