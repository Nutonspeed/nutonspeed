
// Create.js - src/js/create.js

import supabase from '../services/supabase.js';

document.addEventListener('DOMContentLoaded', () => {
  const createForm = document.getElementById('createForm');

  createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const amount = parseFloat(document.getElementById('amount').value);

    try {
      const { error } = await supabase.from('invoices').insert([{ customer_name: customerName, amount, status: 'รอตรวจสอบ' }]);
      if (error) throw error;

      alert('บิลถูกสร้างเรียบร้อยแล้ว');
      createForm.reset();
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  });
});
