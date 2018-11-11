click()


function click() {

    document.getElementById('1').onclick = function() {
        if(this.getAttribute('akt') == 'true')
        {
            document.getElementById('check').style.display = 'none'
            document.getElementById('mnth').style.display = 'none'
            document.getElementById('description').style.display = 'none'
            document.getElementById('hr').style.display = 'none'
            document.getElementById('delete').style.display = 'none'
            document.getElementById('1').setAttribute('akt', false)
        }
        else
        {
            document.getElementById('check').style.display = 'block'
            document.getElementById('description').style.display = 'block'
            document.getElementById('hr').style.display = 'block'
            document.getElementById('delete').style.display = 'block'
            document.getElementById('1').setAttribute('akt', true)
            if (document.getElementById('checkloop').checked)
                document.getElementById('mnth').style.display = 'block'
        }
    }


    document.getElementById('check').onclick = function() {
        if(document.getElementById('mnth').style.display == 'none')
        {
            this.setAttribute('checked', true)
            document.getElementById('mnth').style.display = 'block'
        }
        else
        {
            document.getElementById('mnth').style.display = 'none'
            this.checked = false
        }
    }

    document.getElementById('checklabel').onclick = function() {
        if(document.getElementById('mnth').style.display == 'none')
        {
            document.getElementById('mnth').style.display = 'block'
        }
        else
        {
            document.getElementById('mnth').style.display = 'none'
        }
    }

    for(i = 1; i < 8; i++){
        document.getElementById('day' + i).onclick = function() {
            if(this.style.color == 'white')
            {
                this.style.color = '#4d5358';
                this.style.background = 'white';
            }
            else
            {
                this.style.color = 'white';
                this.style.background = 'gray';
            }
        }
    }

    document.getElementById('checkbox1').onclick = function() {
        if(document.getElementById('checkbox1').checked == false)
        {
            document.getElementById('spantime1').style.color = 'rgba(255, 255, 255, 0.50)'
            document.getElementById('check').style.display = 'none'
            document.getElementById('mnth').style.display = 'none'
            document.getElementById('description').style.display = 'none'
            document.getElementById('hr').style.display = 'none'
            document.getElementById('delete').style.display = 'none'
            document.getElementById('1').setAttribute('akt', false)
        }
        else {
            document.getElementById('spantime1').style.color = '#419ff1'
            document.getElementById('check').style.display = 'block'
            document.getElementById('description').style.display = 'block'
            document.getElementById('hr').style.display = 'block'
            document.getElementById('delete').style.display = 'block'
            document.getElementById('1').setAttribute('akt', true)
            if (document.getElementById('checkloop').checked)
                document.getElementById('mnth').style.display = 'block'
        }
            
    }
}