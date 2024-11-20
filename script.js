document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form-empresa');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    const segmentoSelect = document.getElementById('segmento');

    // Simulação de dados dos segmentos (pode ser carregado via API futuramente)
    const segmentos = [
        { id: 1, nome: 'Tecnologia' },
        { id: 2, nome: 'Saúde' },
        { id: 3, nome: 'Educação' },
    ];

    // Popula o select de segmentos
    segmentos.forEach(segmento => {
        const option = document.createElement('option');
        option.value = segmento.id;
        option.textContent = segmento.nome;
        segmentoSelect.appendChild(option);
    });

    // Submissão do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Coleta os dados do formulário
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

        // Valida os campos básicos
        if (!formData.segmento_id || formData.cnpj_cpf.length < 11) {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }

        // Simula uma requisição (use fetch para enviar ao backend real)
        console.log("Enviando dados:", formData);

        // Simulação de resposta de sucesso
        setTimeout(() => {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            form.reset(); // Limpa o formulário
        }, 1000);
    });
});
