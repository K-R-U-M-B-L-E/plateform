const AssociationModelWithMinimumInformations = {
   presentation: {
      name: 'Association 1',
      university: 'Université de Paris',
      city: 'Paris',
      description: null,
      image: null,
      partnerPropositionAllowed: true,
   },
   projects: null,
   photos: null,
   contacts: {
      primaryContact: {
         phoneNumber: null,
         firstMail: 'ab@gmail.com',
         secondMail: null,
         personnalInformations: null,
      },
      secondaryContact: {
         website: null,
         facebook: null,
         instagram: null,
      },
   },
   helpExplanation: null,
}

export default AssociationModelWithMinimumInformations
