/////////////////////////
// Functions
/////////////////////////

/////////////////////////
// Commons
/////////////////////////
// Footer
const scrollToMain = document.querySelector('.footer__back-to-top');
scrollToMain.addEventListener('click', (e) => {
  window.scroll(0, findPos(document.querySelector('main')));
});

/////////////////////////
// Components
/////////////////////////

let teamMembersArray = [
  {
    name: 'Anmol kumar',
    post: 'Convener',
    skills: ['Cinematography', 'Photography', 'VFX', 'SFX'],
    summary: [
      `One who communicates a character's hope,dreams and emotions without words, working with YouTube channels and a freelancer with UK/US client`,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/anmol-kumar-139b031b2',
    linkedin: 'anmol-kumar',
    instagramUrl: 'https://www.instagram.com/canonwalalarka/',
    instagram: 'canonwalalarka',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 83403 16841',
    photoname: 'anmol.jpg',
  },
  {
    name: 'Soham Das',
    post: 'Co-Convener',
    skills: ['Graphic Designing', 'Videography', 'UI/ UX Designer'],
    summary: [
      `Designer  who enjoy taking complex problems turning them in to simple and beautiful designs. Work Devoted and a friend with whom you can be  an ardent , keen to learn new things everyday.`,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/soham-810-das/',
    linkedin: 'soham-810-das',
    instagramUrl: 'https://www.instagram.com/thesohamdas',
    instagram: 'thesohamdas',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 97407 34156',
    photoname: 'soham.jpeg',
  },
  {
    name: 'Meharpreet Singh',
    post: 'Member',
    skills: [
      'Graphic Designing',
      'Web Development',
      'Motion Graphics',
      'User Interface & Experience Designer',
    ],
    summary: [
      'I am a skilled freelance designer with over three years of experience in the field! Providing services up-to-date on new techniques and procedures related to requirements.',
      'Excels at web platform development, desktop publishing, computer-aided designs, and video editing & creation and latest editing software programs. I have managed multiple projects at the same time. With excellent communication, I am able to work as part of a team or as the sole designer.',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/meharpreet-singh/',
    linkedin: 'meharpreet-singh',
    instagramUrl: 'https://www.instagram.com/mehar.sidhu.07/',
    instagram: 'mehar.sidhu.07',
    facebookUrl: 'https://www.facebook.com/mehar.sidhu.01/',
    facebook: 'mehar.sidhu.01',
    whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 83603 50054',
    photoname: 'mr-meharpreet-singh.jpg',
  },
  {
    name: 'Abhishu Shakya',
    post: 'Member',
    skills: ['Graphic Designing', 'Photographer'],
    summary: [
      `Hello...I'm Abhishu and designated to the post of Graphic Designer and a Photographer in Šviesa. I have been into photography for the past two years and got featured on several photography pages on Instagram.
      After my induction into the Šviesa, I got the opportunity to learn something of my desire. I chose Graphic Designing as my next stuff for my skill's library and my seniors helped me a lot throughout that journey. Currently, I design the monthly newspaper of Šviesa, "The Šviesa Novine".`,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/abhishu-shakya-454623202/',
    linkedin: 'Abhishu Shakya',
    instagramUrl: 'https://www.instagram.com/abhishu.jpeg/',
    instagram: 'abhishu.jpeg',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 74558 71768',
    photoname: 'Abhishu Shakya.jpg',
  },
  {
    name: `Uday Sharma`,
    post: 'Member',
    skills: ['Writing'],
    summary: [
      'An artist !',
      'जीती बाज़ी हारने को तैयार है,',
      'जिसको जीत नही, दिल की दरकार है !',
      'सब में रहकर भी वो अलग दिखेगा !',
      'उसके हाथ में स्याही की तलवार है,',
      '- त्र्यम्बकं',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/uday-sharma-16a218192',
    linkedin: 'Uday Sharma',
    instagramUrl: 'https://www.instagram.com/Pandit_extrovert/',
    instagram: 'Pandit_extrovert',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100012199787023',
    facebook: 'Uday Sharma',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 98976 62020',
    photoname: 'Uday Sharma.jpg',
  },
  {
    name: `Arpit Shah `,
    post: 'Member',
    skills: ['Photography', 'Videography'],
    summary: [
      "An athlete who is artist by heart, Who doesn't want to bound himself with a tag, Love to learn love to experiment..",
    ],
    linkedinUrl: 'https://www.linkedin.com/in/arpit-shah-018979191',
    linkedin: 'arpit-shah',
    instagramUrl: 'https://www.instagram.com/arpit_the8055/',
    instagram: 'arpit_the8055',
    facebookUrl: '',
    facebook: 'Uday Sharma',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 99183 55513',
    photoname: 'arpit-shah.jpeg',
  },
  {
    name: `Guddu Kumar`,
    post: 'Member',
    skills: ['Graphic Designing', 'Photography', 'Content Writing (HINDI)'],
    summary: [
      `I am a learning designer with experience of one year, using Adobe Illustrator, Figma.
      Love to capture emotions and tell stories through that.`,

      `Also pen down love, emotions and nuances of life through the language that I love the most i.e, HINDI.
      The line that describes me: `,
      `ब्रह्माण्ड जीवन स्रोत का कथानक मात्र हूँ |`,
      `PROUD TO BE PART OF TEAM ŠVIESA`,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/arpit-shah-018979191',
    linkedin: 'arpit-shah',
    instagramUrl: 'https://www.instagram.com/guddu7353/',
    instagram: 'guddu7353',
    facebookUrl: 'https://www.facebook.com/guddu.7353',
    facebook: 'guddu.7353',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 95727 24265',
    photoname: 'guddu-kumar.jpeg',
  },
  {
    name: `Vipin Kumar`,
    post: 'Member',
    skills: [`Content writer`, `Meme Creator`, `Photography`],
    summary: [
      `Enthusiastic to learn new things, Currently upskilling my content writing skills, Also loves to create memes that are relatable and carry a sense. `,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/vipin-kumar-5a0a91189',
    linkedin: 'vipin-kumar',
    instagramUrl: 'https://instagram.com/beauty_cap_turer_?utm_medium=copy_link',
    instagram: 'beauty_cap_turer_',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 96390 07016',
    photoname: 'vipin-kumar.jpg',
  },
  {
    name: `Mudita Sinha`,
    post: 'Member',
    skills: ['Voice over', 'Audio editing', 'Photography'],
    summary: [`A creative, versatile and cohesive member of the team since 2017.`],
    linkedinUrl: 'https://www.linkedin.com/in/mudita-sinha-515085212',
    linkedin: 'mudita-sinha',
    instagramUrl: 'https://instagram.com/specs_irritated',
    instagram: 'specs_irritated',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 91137 59342',
    photoname: 'mudita-sinha.jpg',
  },
  {
    name: `Juhi Kumari`,
    post: 'Member',
    skills: ['Photography'],
    summary: [
      `I want to live imprisoned on a journey because I neither seek the destination nor the reality. I want to fly in a closed room and sit under the open sky for hours..`,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/juhi-kumari-a169121b2',
    linkedin: 'juhi-kumari',
    instagramUrl: 'https://instagram.com/musafir_insaann?utm_medium=copy_link',
    instagram: 'musafir_insaann',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 79031 16006',
    photoname: 'juhi-kumari.jpeg',
  },
  {
    name: `Ayush Kumar`,
    post: 'Member',
    skills: ['Content Writing', 'Graphic Designer', 'Podcaster'],
    summary: [
      `Skilled in content and pretty good managerial skills and a wanderer through the world of words. `,
    ],
    linkedinUrl: 'https://www.linkedin.com/in/ayush-kumar-846973157/',
    linkedin: 'ayush-kumar',
    instagramUrl: 'https://instagram.com/ayush._.sawarn',
    instagram: 'ayush._.sawarn',
    facebookUrl: '',
    facebook: '',
    // whatsappUrl: 'https://wa.link/whump8',
    whatsapp: '+91 88518 27205',
    photoname: 'Ayush Kumar.jpg',
  },
];
