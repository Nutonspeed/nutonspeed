
// Dashboard.js - src/js/dashboard.js

import supabase from '../services/supabase.js';

export const fetchInvoices = async () => {
  try {
    const { data, error } = await supabase.from('invoices').select('*');
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return [];
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  const invoiceTable = document.querySelector('#invoiceTable tbody');
  const invoices = await fetchInvoices();

  invoiceTable.innerHTML = invoices.length
    ? invoices.map(invoice => `
        <tr>
          <td>${invoice.order_number}</td>
          <td>${invoice.customer_name}</td>
          <td>${invoice.amount}</td>
          <td>${invoice.status}</td>
        </tr>
      `).join('')
    : '<tr><td colspan="4">ไม่มีบิล</td></tr>';
});
