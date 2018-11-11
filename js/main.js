click()


function click() {

    document.getElementById('1').onclick = function() {
        if(this.getAttribute('akt') == 'true')
        {
            document.getElementById('check').style.display = 'none'
            document.getElementById('check').checked = false
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
            document.getElementById('check').checked = false
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
            if(this.style.color == 'gray' || this.style.color=='')
            {
                this.style.color = 'white';
                this.style.background = 'gray';
            }
            else
            {
                this.style.color = 'gray';
                this.style.background = 'white';
            }
        }
    }

    document.getElementById('checkbox1').onclick = function() {
        if(document.getElementById('spantime1').style.color != 'rgb(47, 76, 105)')
        {
            document.getElementById('spantime1').style.color = '#2f4c69'
        }
        else
            document.getElementById('spantime1').style.color = '#3189d4'
    }
}