click()

function numbers() {
    
}

var lastestClosedDayId = ['day1','day2','day3','day4','day5','day6','day7'];

var weekDay = {'day1':'пн','day2':'вт','day3':'ср','day4':'чт','day5':'пт','day6':'сб','day7':'вс'}

function click() 
{
    setDay()

    document.getElementById('check').style.display = 'none'
    document.getElementById('mnth').style.display = 'none'
    document.getElementById('description').style.display = 'none'
    document.getElementById('hr').style.display = 'none'
    document.getElementById('delete').style.display = 'none'
    document.getElementById('1').setAttribute('akt', false)

    document.getElementById('buffer').onclick = function() 
    {
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


    document.getElementById('check').onclick = function() 
    {
        if(document.getElementById('mnth').style.display == 'none')
        {
            this.setAttribute('checked', true)
            document.getElementById('work').setAttribute('checked', true)
            document.getElementById('weekend').setAttribute('checked', true)
            document.getElementById('mnth').style.display = 'block'
            if(lastestClosedDayId.length < 7)
            {
                for(var i in lastestClosedDayId)
                {
                    document.getElementById(lastestClosedDayId[i]).style.background = 'white'
                    document.getElementById(lastestClosedDayId[i]).style.color = '#4d5358'
                }

                if(lastestClosedDayId.length == 2)
                {
                    document.getElementById('weekend').checked = true;
                }
                else if(lastestClosedDayId.length == 5)
                document.getElementById('work').checked = true;
            }
        }
        else
        {
            document.getElementById('mnth').style.display = 'none'
            this.setAttribute('checked', false)
            document.getElementById('work').setAttribute('checked', false)
            document.getElementById('weekend').setAttribute('checked', false)
        }
        changeDays()
    }

    document.getElementById('checklabel').onclick = function() 
    {
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

        document.getElementById('day' + i).style.background = 'white'
        document.getElementById('day' + i).onclick = function() 
        {
            if(this.style.color == 'white')
            {
                this.style.color = '#4d5358';
                this.style.background = 'white';
            }
            else
            {
                this.style.color = 'white';
                this.style.background = '#4d5358';
            }

            document.getElementById('work').checked = false;
            document.getElementById('weekend').checked = false;

            if (document.getElementById('day1').style.background == 'white' &&
                document.getElementById('day2').style.background == 'white' &&
                document.getElementById('day3').style.background == 'white' &&
                document.getElementById('day4').style.background == 'white' &&
                document.getElementById('day5').style.background == 'white')
            {
                document.getElementById('work').checked = true;
            }

            if (document.getElementById('day6').style.background == 'white' &&
                document.getElementById('day7').style.background == 'white') 
            {
                document.getElementById('weekend').checked = true;
            }

            for(var i = 1; i < 8; i++)
            {
                if(document.getElementById('day' + i).style.background == 'white')
                {
                    break
                }
            }
            if(i==8)
            {
                document.getElementById('checkloop').checked = false
                document.getElementById('mnth').style.display = 'none'
                lastestClosedDayId = [this.id]
            }


            var daysStr = ''
            for(var i = 1; i < 8; i++)
            {
                if(document.getElementById('day' + i).style.background == 'white')
                {
                    daysStr += weekDay['day' + i] + ' '
                }
            }
            document.getElementById('days').textContent = daysStr
            }
    }


    document.getElementById('checkbox1').onclick = function() 
    {
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
        else 
        {
            document.getElementById('spantime1').style.color = '#419ff1'
            document.getElementById('check').style.display = 'block'
            document.getElementById('description').style.display = 'block'
            document.getElementById('hr').style.display = 'block'
            document.getElementById('delete').style.display = 'block'
            document.getElementById('1').setAttribute('akt', true)
            if (document.getElementById('checkloop').checked)
                document.getElementById('mnth').style.display = 'block'
            document.getElementById('work').checked = true
            document.getElementById('weekend').checked = true
        }

    }

    document.getElementById('work').onclick = function() 
    {
        if(document.getElementById('work').checked == false) 
        {
            for(i = 1; i < 6; i++)
            {
                document.getElementById('day' + i).style.color = 'white';
                document.getElementById('day' + i).style.background = '#4d5358';
            }
        }
        else 
        {
            for(i = 1; i < 6; i++)
            {
                document.getElementById('day' + i).style.color = '#4d5358';
                document.getElementById('day' + i).style.background = 'white';
            }
        }


            for(var i = 1; i < 8; i++)
            {
                if(document.getElementById('day' + i).style.background == 'white')
                {
                    break
                }
            }
            if(i==8)
            {
                document.getElementById('checkloop').checked = false
                document.getElementById('mnth').style.display = 'none'
                lastestClosedDayId = ['day1','day2','day3','day4','day5']
            }


changeDays()

    }

    document.getElementById('weekend').onclick = function() 
    {
        if(document.getElementById('weekend').checked == false) 
        {
            for(i = 6; i < 8; i++)
            {
                document.getElementById('day' + i).style.color = 'white';
                document.getElementById('day' + i).style.background = '#4d5358';
            }
        }
        else 
        {
            for(i = 6; i < 8; i++)
            {
                document.getElementById('day' + i).style.color = '#4d5358';
                document.getElementById('day' + i).style.background = 'white';
            }
        }

            for(var i = 1; i < 8; i++)
            {
                if(document.getElementById('day' + i).style.background == 'white')
                {
                    break
                }
            }
            if(i==8)
            {
                document.getElementById('checkloop').checked = false
                document.getElementById('mnth').style.display = 'none'
                lastestClosedDayId = ['day6','day7']
            }


changeDays()


    }

    document.getElementById('spantime1').onclick = function() 
    {
        if(document.getElementById('select-time-circle').style.display == 'none'){
            document.getElementById('select-time-circle').style.display = 'block'
            document.getElementById('input-time').value = document.getElementById('spantime1').textContent.trim()
            document.getElementById('bg').style.display = 'block'
        }
        else
        {
            document.getElementById('select-time-circle').style.display = 'none'
            document.getElementById('bg').style.display = 'none'
        }

    }

    document.getElementById('cancel').onclick = function() 
    {
        document.getElementById('select-time-circle').style.display = 'none'
        document.getElementById('bg').style.display = 'none'
    }

    document.getElementById('ok').onclick = function() 
    {
        document.getElementById('spantime1').textContent = document.getElementById('input-time').value
        document.getElementById('select-time-circle').style.display = 'none'
        document.getElementById('bg').style.display = 'none'
    }

    document.getElementById('bg').onclick = function()
    {
        this.style.display = 'none'
        document.getElementById('select-time-circle').style.display = 'none'        
    }


}

function changeDays()
{
        var daysStr = ''
        for(var i = 1; i < 8; i++)
        {
            if(document.getElementById('day' + i).style.background == 'white')
            {
                daysStr += weekDay['day' + i] + ' '
            }
        }
        if(document.getElementById('mnth').style.display == 'none')
        {
           setDay()
           return 
        } 
        document.getElementById('days').textContent = daysStr
}

function setDay()
{
    if(parseInt(document.getElementById('spantime1').textContent.trim().substring(0,2)) >= new Date().getHours()
    && parseInt(document.getElementById('spantime1').textContent.trim().substring(3)) >= new Date().getMinutes())
    {
        document.getElementById('days').textContent = 'Сегодня'
    }
    else
    {
        document.getElementById('days').textContent = 'Завтра'   
    }
}