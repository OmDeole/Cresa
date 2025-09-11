import { TeamMember, Professor, Event, Alumni, GalleryItem } from '../types';

export const currentTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'President',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Leading the association with passion for innovation and student development. Computer Science senior with expertise in full-stack development.',
    linkedin: 'https://linkedin.com',
    email: 'president@sace.edu'
  },
  {
    id: '2',
    name: 'David Kumar',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Supporting leadership initiatives and coordinating with academic departments. Passionate about AI and machine learning.',
    linkedin: 'https://linkedin.com',
    email: 'vp@sace.edu'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Secretary',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Managing communications and documentation. Specializing in cybersecurity and data protection.',
    linkedin: 'https://linkedin.com',
    email: 'secretary@sace.edu'
  },
  {
    id: '4',
    name: 'Michael Zhang',
    role: 'Technical Lead',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Overseeing technical projects and hackathons. Expert in cloud computing and DevOps practices.',
    linkedin: 'https://linkedin.com',
    email: 'tech@sace.edu'
  }
];

export const faculty: Professor[] = [
  {
    id: '1',
    name: 'Dr. Robert Wilson',
    role: 'Head of Department',
    department: 'Computer Engg. Regional',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Leading the Computer Engg. Regional department with 15+ years of experience in software engineering and research.',
    email: 'hod@university.edu',
    specialization: 'Software Architecture, Database Systems'
  },
  {
    id: '2',
    name: 'Prof. Lisa Thompson',
    role: 'Professor',
    department: 'Computer Engg. Regional',
    image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Expert in artificial intelligence and machine learning with numerous published research papers.',
    email: 'lisa.thompson@university.edu',
    specialization: 'AI/ML, Natural Language Processing'
  },
  {
    id: '3',
    name: 'Dr. James Park',
    role: 'Associate Professor',
    department: 'Computer Engg. Regional',
    image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Specializing in cybersecurity and network systems with industry consulting experience.',
    email: 'james.park@university.edu',
    specialization: 'Cybersecurity, Network Systems'
  }
];

export const pastTeams = {
  '2024-25': [
    {
      id: '2024-1',
      name: 'Alex Johnson',
      role: 'President',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading the association through successful tech initiatives.',
      linkedin: 'https://linkedin.com'
    },
    {
      id: '2024-2',
      name: 'Maria Garcia',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Coordinating major events and partnerships.',
      linkedin: 'https://linkedin.com'
    },
    {
      id: '2024-3',
      name: 'Ryan Lee',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Organizing hackathons and coding competitions.',
      linkedin: 'https://linkedin.com'
    }
  ],
  '2023-24': [
    {
      id: '2023-1',
      name: 'Jessica Wang',
      role: 'President',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Pioneered the mentorship program.',
      linkedin: 'https://linkedin.com'
    },
    {
      id: '2023-2',
      name: 'Kevin Smith',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Enhanced industry connections.',
      linkedin: 'https://linkedin.com'
    }
  ],
  '2022-23': [
    {
      id: '2022-1',
      name: 'Rahul Sharma',
      role: 'President',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Established the foundation for modern CRESA.',
      linkedin: 'https://linkedin.com'
    },
    {
      id: '2022-2',
      name: 'Priya Singh',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Initiated the first regional tech symposium.',
      linkedin: 'https://linkedin.com'
    },
    {
      id: '2022-3',
      name: 'Amit Patel',
      role: 'Technical Lead',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Built the first student project showcase platform.',
      linkedin: 'https://linkedin.com'
    }
  ],
};

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Symposium',
    date: '2024-03-15',
    description: 'A comprehensive technology conference featuring industry leaders and student innovations.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Conference'
  },
  {
    id: '2',
    title: 'HackCode 2024',
    date: '2024-02-20',
    description: '48-hour hackathon bringing together students to solve real-world problems through code.',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Hackathon'
  },
  {
    id: '3',
    title: 'Industry Mixer Night',
    date: '2024-01-25',
    description: 'Networking event connecting students with tech industry professionals and recruiters.',
    image: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Networking'
  },
  {
    id: '4',
    title: 'AI Workshop Series',
    date: '2024-01-10',
    description: 'Hands-on workshops covering machine learning, deep learning, and AI applications.',
    image: 'https://images.pexels.com/photos/1181619/pexels-photo-1181619.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Workshop'
  }
];


export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Tech Symposium 2024',
    type: 'image',
    category: 'events'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'HackCode 2024',
    type: 'image',
    category: 'hackathons'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Industry Networking',
    type: 'image',
    category: 'networking'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/1181619/pexels-photo-1181619.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'AI Workshop',
    type: 'image',
    category: 'workshops'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Team Building',
    type: 'image',
    category: 'team'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=500',
    alt: 'Code Competition',
    type: 'image',
    category: 'competitions'
  }
];

export const stats = [
  { label: 'Active Members', value: 250 },
  { label: 'Events Hosted', value: 48 },
  { label: 'Awards Won', value: 15 },
  { label: 'Years Active', value: 8 }
];