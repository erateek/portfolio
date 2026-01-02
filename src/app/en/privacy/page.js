import { en } from '../../../i18n/dictionaries';
import LegalTemplate from '../../../components/templates/LegalTemplate';

export const metadata = {
  title: {
    absolute: 'Privacy Policy | Erateek',
  },
  description: 'Learn how we handle and protect your data at Erateek.',
};

export default function PrivacyPage() {
  return <LegalTemplate dict={en} lang="en" contentKey="privacy" />;
}
