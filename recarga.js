document.getElementById('pixBtn').addEventListener('click', function() {
    showForm('pixForm');
  });
  
  document.getElementById('transferBtn').addEventListener('click', function() {
    showForm('transferForm');
  });
  
  document.getElementById('creditCardBtn').addEventListener('click', function() {
    showForm('creditCardForm');
  });
  
  function showForm(formId) {
    // Oculta todos os formulários
    var forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
      form.classList.add('hidden');
    });
  
    // Exibe o formulário desejado
    var selectedForm = document.getElementById(formId);
    selectedForm.classList.remove('hidden');
  }
  