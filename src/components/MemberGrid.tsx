import MemberCard, { Member } from './MemberCard';

const members: Member[] = [
  {
    id: '1',
    name: 'Aura - The Matriarch',
    title: 'Founder & Visionary',
    bio: 'The heart and soul of the WETT Lifestyle, leading the family with wisdom and grace.',
    imageUrl: '/placeholders/aura.png', // Placeholder image
  },
  {
    id: '2',
    name: 'Bay\'Hef - The Architect',
    title: 'Founder & Strategist',
    bio: 'The mind behind the blueprint, building the empire brick by brick.',
    imageUrl: '/placeholders/bayhef.png', // Placeholder image
  },
  {
    id: '3',
    name: 'Candy Lady',
    title: 'CEO, Snack Stop Shawty',
    bio: 'Bringing sweetness to the community, one snack at a time.',
    imageUrl: '/placeholders/candylady.png', // Placeholder image
  },
  {
    id: '4',
    name: 'Mac Wayne',
    title: 'Head of Music & Media',
    bio: 'The voice of the movement, curating the sounds of the WETT empire.',
    imageUrl: '/placeholders/macwayne.png', // Placeholder image
  },
];

const MemberGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default MemberGrid;
