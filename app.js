document.querySelector ('.cmp__accordion').addEventListener ('click', handleAccordionClick);
let currentItem = null;

function handleAccordionClick (e)
{
    setCurrentItem (e.target.closest ('.cmp__item'));
}

function setCurrentItem (target)
{
    if (currentItem === target)
        target = null;

    if (currentItem)
        currentItem.classList.remove ('selected');

    currentItem = target;

    if (currentItem)
        currentItem.classList.add ('selected');
}