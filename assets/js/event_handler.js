document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function objectSceneEventRE10K(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/meshsplat/re10k_scene1';
                        break;
                    case 1:
                        image.src = './static/images/meshsplat/re10k_scene2';
                        break;
                    
                }
                switch (i) {
                    
                    case 0:
                        image.src = image.src + '_mvsplat.png';
                        break;
                    case 1:
                        image.src = image.src + '_meshsplat.png';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon_re10k").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function objectSceneEvent_Scannet(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = './static/images/meshsplat/scannet_scene1';
                        break;
                    case 1:
                        image.src = './static/images/meshsplat/scannet_scene2';
                        break;
                    
                }
                switch (i) {
                  
                    case 0:
                        image.src = image.src + '_mvsplat.png';
                        break;
                    case 1:
                        image.src = image.src + '_meshsplat.png';
                        break;
                    

                }
            }

            let scene_list = document.getElementById("object-scale-recon_scannet").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }