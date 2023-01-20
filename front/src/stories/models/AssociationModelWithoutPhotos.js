const description =
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const AssociationModelWithoutPhotos = {
   presentation: {
      name: 'Association 1',
      university: 'Université de Paris',
      city: 'Paris',
      description: description,
      image: 'https://source.unsplash.com/random',
      partnerPropositionAllowed: true,
   },
   photos: null,
   projects: null,
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
   helpExplanation: 'Nous sommes une association qui aide les gens',
}

export default AssociationModelWithoutPhotos
