function age(){
    const ageEnter = document.querySelector('.input').value;
    if(ageEnter==""){
        document.getElementById("result").innerHTML = '<div class="alert alert-danger">Bạn đã nhập đâu mà tính</div>'
    }
    else if (ageEnter == 0){
        document.getElementById("result").innerHTML = '<div class="alert alert-danger">M mới đẻ mà biết dùng máy tính r à</div>'
    }
    else if(ageEnter<=0){
        document.getElementById("result").innerHTML = '<div class="alert alert-danger">Biết ông Liem không ?</div>'
    }
    else if(ageEnter == 18){
        document.getElementById("result").innerHTML = '<div class="alert alert-success">Bạn đã '+ ageEnter+' tuổi rồi, đủ tuổi đi tù rồi</div>'
    }
    else if(ageEnter<80){
        document.getElementById("result").innerHTML = '<div class="alert alert-success">Bạn đã '+ ageEnter+' tuổi rồi</div>'
    } 
    else if(ageEnter<=100 && ageEnter >= 80){
        document.getElementById("result").innerHTML = '<div class="alert alert-success">Cụ đã '+ ageEnter+' tuổi rồi</div>'
    } 
    else {
        document.getElementById("result").innerHTML = '<div class="alert alert-danger">Wifi dưới đó mạnh không cụ ?</div>';
    }
}

const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const deleteValue = document.getElementById('input');
    deleteValue.value = '';
})
