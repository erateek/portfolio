import { en } from '../../../i18n/dictionaries';
import ProcessTimeline from '../../../components/templates/ProcessTimeline';

export const metadata = {
  title: {
    absolute: 'How We Work | Erateek',
  },
  description: 'Discover Erateek\'s proven web development process, from discovery to launch.',
};

export default function ProcessPage() {
  return <ProcessTimeline dict={en} lang="en" />;
}
