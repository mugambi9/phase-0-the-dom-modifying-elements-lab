// Write your code here!
document.addEventListener('DOMContentLoaded', function () {
    
    const mainNode = document.querySelector('main#main');
    if (mainNode) {
      mainNode.remove();
    }
    const newHeader = document.createElement('h1');
    console.log (document.createElement)
    newHeader.id = 'victory';
    newHeader.innerHTML = "YOUR-NAME is the champion"; 
    document.body.appendChild(newHeader);
    
});