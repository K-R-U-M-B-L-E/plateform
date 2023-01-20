const project = {
   title: 'Projet 1',
   description: 'Description du projet',
   date: '2020-01-01',
   advantagesForSponsor:
      "Avantages pour le sponsor sont ici.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing ",
   needs: {
      money: {
         isNeeded: true,
         amount: 1000,
      },
      material: {
         isNeeded: false,
         description: null,
      },
      people: {
         isNeeded: false,
         description: null,
      },
   },
}

const AssociationModelWithProject = {
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
   projects: [project],
   helpExplanation: 'Nous sommes une association qui aide les gens',
}

export default AssociationModelWithProject
