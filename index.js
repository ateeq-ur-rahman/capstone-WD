const form = document.getElementById('registration-form');
      const table = document.getElementById('registration-table').getElementsByTagName('tbody')[0];
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const dob = form.elements['dob'].value;
        const acceptedTerms = form.elements['accepted-terms'].checked;
        if (isEmailValid(email) && isAgeValid(dob)) {
          const row = table.insertRow();
          row.insertCell().textContent = name;
          row.insertCell().textContent = email;
          row.insertCell().textContent = password;
          row.insertCell().textContent = dob;
          row.insertCell().textContent = acceptedTerms ? 'true' : 'false';
          form.reset();
        } else {
          alert('Invalid email address or age is not between 18 and 55.');
        }
      });

      function isEmailValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      function isAgeValid(dob) {
        const age = calculateAge(dob);
        return age >= 18 && age <= 55;
      }

      function calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }