document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form-empresa');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const segmentoSelect = document.getElementById('segmento');

    const segmentos = [
        { id: 1, nome: 'Tecnologia' },
        { id: 2, nome: 'Saúde' },
        { id: 3, nome: 'Educação' },
    ];

   
    segmentos.forEach(segmento => {
        const option = document.createElement('option');
        option.value = segmento.id;
        option.textContent = segmento.nome;
        segmentoSelect.appendChild(option);
    });

    
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const formData = {
            nome: document.getElementById('nome').value,
            cep: document.getElementById('cep').value,
            rua: document.getElementById('rua').value,
            numero: document.getElementById('numero').value,
            bairro: document.getElementById('bairro').value,
            estado: document.getElementById('estado').value,
            whatsapp: document.getElementById('whatsapp').value,
            cnpj_cpf: document.getElementById('cnpj_cpf').value,
            segmento_id: document.getElementById('segmento').value,
        };

        
        if (!formData.segmento_id || formData.cnpj_cpf.length < 11) {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }

        
        console.log("Enviando dados:", formData);

        
        setTimeout(() => {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset(); 
        }, 1000);
    });
});
