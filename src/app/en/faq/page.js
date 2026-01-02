import { en } from '../../../i18n/dictionaries';
import FAQTemplate from '../../../components/templates/FAQTemplate';

export const metadata = {
  title: {
    absolute: 'FAQ | Erateek',
  },
  description: 'Answers to your questions about our services, pricing, and process.',
};

export default function FAQPage() {
  return <FAQTemplate dict={en} lang="en" />;
}
