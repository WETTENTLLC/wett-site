import CourseCard, { Course } from '@/components/CourseCard';

const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Group Economics',
    description: 'Learn the fundamental principles of group economics and how to apply them in your community.',
    imageUrl: '/placeholders/course1.png', // Placeholder image
    duration: '4 Weeks',
  },
  {
    id: '2',
    title: 'The WETT Doctrine: Financial Strategy',
    description: 'A deep dive into the financial strategies that power the WETT empire.',
    imageUrl: '/placeholders/course2.png', // Placeholder image
    duration: '6 Weeks',
  },
  {
    id: '3',
    title: 'Business Incubation 101',
    description: 'From idea to launch, this course covers the essentials of starting a successful business.',
    imageUrl: '/placeholders/course3.png', // Placeholder image
    duration: '8 Weeks',
  },
];

export default function GroupEconomicsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-wett-gold text-center mb-8">Group Economics Mastery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
