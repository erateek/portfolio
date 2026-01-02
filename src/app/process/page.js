import { ar } from '../../i18n/dictionaries';
import ProcessTimeline from '../../components/templates/ProcessTimeline';

export const metadata = {
  title: 'كيف نعمل؟ - منهجية إراتيك | إراتيك',
  description: 'تعرف على منهجية العمل في وكالة إراتيك، من التخطيط إلى الإطلاق.',
};

export default function ProcessPage() {
  return <ProcessTimeline dict={ar} lang="ar" />;
}
