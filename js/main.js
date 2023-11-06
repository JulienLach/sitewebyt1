// FAQ accordeon 

document.addEventListener('DOMContentLoaded', () => {

    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header'); // pour attraper tout le conteneur que je veux annimer

        if (!groupHeader) return;  // si je ne clique pas dans le header, cela ne va pas annimer, ici si je clique sur le paragraphe en dessous de la question, le console log ne me retourne rien


        const group = groupHeader.parentElement;  // pour attraper tous les éléments parents de mon group
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');


        // toogle icon minus or plus
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility de la réponse de la question
        groupBody.classList.toggle('open');  // avec cette ligne j'ajoute la classe open à ma div en plus de la class faq-group-body

        // fermer tous les autres faq body quand j'en ouvre 1
        const otherGroups = faqContainer.querySelectorAll('.faq-group');


        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
        console.log(otherGroups);
        console.log(groupHeader);
    });
});



// Mobile menu


document.addEventListener('DOMContentLoaded', () => {

    const hamburgerButton = document.querySelector('.hamburger-button');  // ici définir les constante que je vais animer en cliquant dessus , ici le boutton et le menu en lui même
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () =>
        mobileMenu.classList.toggle('active')
    );
});