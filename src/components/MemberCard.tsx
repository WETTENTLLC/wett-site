import Image from 'next/image';

export interface Member {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const MemberCard = ({ member }: { member: Member }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold text-wett-gold">{member.name}</h3>
      <p className="text-gray-400">{member.title}</p>
      <p className="mt-4 text-sm">{member.bio}</p>
    </div>
  );
};

export default MemberCard;
