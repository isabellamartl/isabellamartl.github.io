function downloadPDF (){
    const element = document.querySelector ('.container-lg');
    const opt = {
        margin:0,
        filename: 'HV_Isabella_Martínez_Londoño.pdf',
        image: { type: 'jpeg', quality:0.98},
        html2canvas: {scale:2, useCors:true, scrolly:0},
        jsPDF: {unit: 'mm', format:'letter', orientation:'portrait'},
        
    };
    html2pdf().set(opt).from (element).save();

}