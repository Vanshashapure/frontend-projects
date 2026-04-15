const ctx = document.getElementById('revenueChart').getContext('2d')

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue (₹)',
      data: [85000, 92000, 78000, 110000, 142000, 98000],
      backgroundColor: 'rgba(22, 77, 245, 0.8)',
      borderRadius: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    }
  }
})