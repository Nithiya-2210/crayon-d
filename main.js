function selectBox(selectedElement) {
              
              document.querySelectorAll('.selectable-box').forEach(box => {
                box.classList.remove('selected');
              });
          
             
              selectedElement.classList.add('selected');
            }