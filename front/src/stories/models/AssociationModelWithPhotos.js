const AssociationModelWithPhotos = {
   presentation: {
      name: 'Association 1',
      university: 'Université de Paris',
      city: 'Paris',
      description: "Description de l'association",
      image: 'https://source.unsplash.com/random',
      partnerPropositionAllowed: true,
   },
   photos: [
      {
         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
         title: 'Breakfast',
         order: 0,
      },
      {
         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
         title: 'Burger',
         order: 1,
      },
      {
         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
         title: 'Camera',
         order: 2,
      },
      {
         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
         title: 'Coffee',
         order: 3,
      },
      {
         img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
         title: 'Hats',
         order: 4,
      },
   ],
   contacts: {
      primaryContact: {
         phoneNumber: '06 12 34 56 78',
         firstMail: 'ab@gmail.com',
         secondMail: 'ab@gmail.com',
         personnalInformations: {
            firstName: 'Jean',
            lastName: 'Dupont',
            role: 'président',
         },
      },
      secondaryContact: {
         website: 'www.krumble.com',
         facebook: 'krumble.fb',
         instagram: 'krumble.insta',
      },
   },
   projects: null,
   helpExplanation: 'Nous sommes une association qui aide les gens',
}

export default AssociationModelWithPhotos
