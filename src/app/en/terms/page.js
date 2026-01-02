import { en } from '../../../i18n/dictionaries';
import LegalTemplate from '../../../components/templates/LegalTemplate';

export const metadata = {
  title: {
    absolute: 'Terms & Conditions | Erateek',
  },
  description: 'Service agreement and client rights at Erateek Agency.',
};

export default function TermsPage() {
  return <LegalTemplate dict={en} lang="en" contentKey="terms" />;
}
