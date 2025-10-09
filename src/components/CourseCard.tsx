import Image from 'next/image';

export interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image src={course.imageUrl} alt={course.title} width={400} height={225} className="w-full object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-wett-gold">{course.title}</h3>
        <p className="text-gray-400 text-sm mb-2">{course.duration}</p>
        <p className="mt-2 text-sm">{course.description}</p>
        <button className="mt-4 bg-wett-gold text-deep-black font-bold py-2 px-4 rounded hover:bg-yellow-500">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;
