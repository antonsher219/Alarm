click()
// set1()
set2()

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function set1() {
    document.getElementById('cancel1').onclick = function() {
        document.getElementsByClassName('clock1')[0].style.display = 'none'
        document.getElementById('shadow').style.display = 'none'
    }

    document.getElementById('ok1').onclick = function() {
        document.getElementById('spantime1').textContent = document.getElementById('hh').textContent + ':' + document.getElementById('mm').textContent
        document.getElementsByClassName('clock1')[0].style.display = 'none'
        document.getElementById('shadow').style.display = 'none'
        alert('Будильник установлен на ' + document.getElementById('spantime1').textContent)
    }

    document.getElementById('hh').style.fontWeight = 'bold'
    document.getElementById('hh').style.color = 'white'
    document.getElementsByClassName('nums')[(document.getElementById('hh').textContent - 1) % 23].style.background = '#2287dc'

    document.getElementById('hh').onclick = function() {
        document.getElementById('add').style.display = 'block'
        document.getElementById('hh').style.fontWeight = 'bold'
        document.getElementById('hh').style.color = 'white'
        document.getElementById('mm').style.fontWeight = 'normal'
        document.getElementById('mm').style.color = '#bbbaba'
        for (var i = 0; i < document.getElementsByClassName('nums').length; i++) {
            document.getElementsByClassName('nums')[i].style.background = '#555c61'
            document.getElementsByClassName('nums')[i].textContent = i + 1
        }
        document.getElementsByClassName('nums')[(document.getElementById('hh').textContent - 1) % 23].style.background = '#2287dc'
        document.getElementsByClassName('second')[0].style.transform = 'rotateZ(' + parseInt((document.getElementById('hh').textContent) % 24) * 30 + 'deg)'
    }

    document.getElementById('mm').onclick = function() {
        document.getElementById('add').style.display = 'none'
        document.getElementById('mm').style.fontWeight = 'bold'
        document.getElementById('mm').style.color = 'white'
        document.getElementById('hh').style.fontWeight = 'normal'
        document.getElementById('hh').style.color = '#bbbaba'
        for (var i = 0; i < document.getElementsByClassName('nums').length; i++) {
            document.getElementsByClassName('nums')[i].style.background = '#555c61'
            document.getElementsByClassName('nums')[i].textContent = (i + 1) * 5 % 60
        }
        document.getElementsByClassName('nums')[((document.getElementById('mm').textContent / 5) + 11) % 12].style.background = '#2287dc'
        document.getElementsByClassName('second')[0].style.transform = 'rotateZ(' + parseInt((document.getElementById('mm').textContent) % 60) * 6 + 'deg)'
    }

    for (var i = 0; i < document.getElementsByClassName('nums').length; i++) {
        document.getElementsByClassName('nums')[i].onclick = function() {
            for (var i = 0; i < document.getElementsByClassName('nums').length; i++) {
                document.getElementsByClassName('nums')[i].style.background = '#555c61'
            }
            this.style.background = '#2287dc'
            if (document.getElementById('add').style.display == 'none') {
                document.getElementsByClassName('second')[0].style.transform = 'rotateZ(' + parseInt(this.textContent) * 6 + 'deg)'
                document.getElementById('mm').textContent = pad(parseInt(this.textContent), 2)  
            }
            else {
                document.getElementsByClassName('second')[0].style.transform = 'rotateZ(' + parseInt(this.textContent) * 30 + 'deg)'
                document.getElementById('hh').textContent = pad(parseInt(this.textContent), 2) 
            }  
        }
    }
}

function set2() {
    document.getElementById('cancel2').onclick = function() {
        document.getElementsByClassName('clock2')[0].style.display = 'none'
        document.getElementById('shadow').style.display = 'none'
    }

    document.getElementById('ok2').onclick = function() {
        document.getElementById('spantime1').textContent = document.getElementById('hh2').textContent + ':' + document.getElementById('mm2').textContent
        document.getElementsByClassName('clock2')[0].style.display = 'none'
        document.getElementById('shadow').style.display = 'none'
        alert('Будильник установлен на ' + document.getElementById('spantime1').textContent)
    }

    document.getElementsByClassName('arrows')[0].onclick = function () {
        document.getElementById('hh2').textContent = pad((parseInt(document.getElementById('hh2').textContent) + 1) % 24, 2)
    }
    document.getElementsByClassName('arrows')[2].onclick = function () {
        document.getElementById('hh2').textContent = pad((parseInt(24 + document.getElementById('hh2').textContent) - 1) % 24, 2)
    }
    document.getElementsByClassName('arrows')[1].onclick = function () {
        document.getElementById('mm2').textContent = pad((parseInt(document.getElementById('mm2').textContent) + 1) % 60, 2)
    }
    document.getElementsByClassName('arrows')[3].onclick = function () {
        document.getElementById('mm2').textContent = pad((parseInt(60 +document.getElementById('mm2').textContent) - 1) % 60, 2)
    }
}

function click() {
    document.getElementsByClassName('clock1')[0].style.display = 'none'
    document.getElementById('shadow').style.display = 'none'

    document.getElementsByClassName('clock2')[0].style.display = 'none'
    document.getElementById('shadow').style.display = 'none'

    document.getElementById('check').style.display = 'none'
    document.getElementById('mnth').style.display = 'none'
    document.getElementById('description').style.display = 'none'
    document.getElementById('hr').style.display = 'none'
    document.getElementById('delete').style.display = 'none'
    document.getElementById('1').setAttribute('akt', false)

    document.getElementById('buffer').onclick = function() {
        if(document.getElementById('1').getAttribute('akt') == 'true')
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

    document.getElementById('1').onclick = function() {
        if(document.getElementById('1').getAttribute('akt') == 'true') {
            document.getElementsByClassName('clock2')[0].style.display = 'block'
            document.getElementById('shadow').style.display = 'block'
        }
        else {
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
                this.style.background = '#85888b';
            }

            document.getElementById('work').checked = false;
            document.getElementById('weekend').checked = false;

            if (document.getElementById('day1').style.color == 'white' &&
                document.getElementById('day2').style.color == 'white' &&
                document.getElementById('day3').style.color == 'white' &&
                document.getElementById('day4').style.color == 'white' &&
                document.getElementById('day5').style.color == 'white'){
                document.getElementById('work').checked = true;
            }

            if (document.getElementById('day6').style.color == 'white' &&
                document.getElementById('day7').style.color == 'white') {
                document.getElementById('weekend').checked = true;
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

    document.getElementById('work').onclick = function() {
        if(document.getElementById('work').checked == false) {
            for(i = 1; i < 6; i++){
                document.getElementById('day' + i).style.color = '#4d5358';
                document.getElementById('day' + i).style.background = 'white';
            }
        }
        else {
            for(i = 1; i < 6; i++){
                document.getElementById('day' + i).style.color = 'white';
                document.getElementById('day' + i).style.background = '#85888b';
            }
        }
    }

    document.getElementById('weekend').onclick = function() {
        if(document.getElementById('weekend').checked == false) {
            for(i = 6; i < 8; i++){
                document.getElementById('day' + i).style.color = '#4d5358';
                document.getElementById('day' + i).style.background = 'white';
            }
        }
        else {
            for(i = 6; i < 8; i++){
                document.getElementById('day' + i).style.color = 'white';
                document.getElementById('day' + i).style.background = '#85888b';
            }
        }
    }
}