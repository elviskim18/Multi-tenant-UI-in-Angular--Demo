export const regionalManagerData = {
  name: 'Gabriel Wainaina',
  region: 'North',
  agents: [
    { name: 'Alice Mwangi', lastActive: '2025-07-28', visitsToday: 5 },
    { name: 'John Kamau', lastActive: '2025-07-29', visitsToday: 3 }
  ],
  tasks: [
    { title: 'Review agent reports', due: '2025-07-30' },
    { title: 'Team Meeting', due: '2025-08-01' }
  ]
};

export const countryManagerData = {
  name: 'John Doe',
  regions: [
    { name: 'North', kpi: 78 },
    { name: 'South', kpi: 65 },
    { name: 'East', kpi: 88 },
    { name: 'West', kpi: 55 }
  ],
  reports: [
    { title: 'Monthly Sales Overview', date: '2025-07-01' },
    { title: 'Field Agent Coverage Report', date: '2025-07-15' }
  ]
};
export const fieldAgentData = {
  name: 'Lewis Hamilton',
  assignedVisits: [
    { store: 'Quickmart Nairobi', status: 'completed' },
    { store: 'Naivas Westlands', status: 'pending' },
    { store: 'Cleanshelf Thika', status: 'pending' }
  ],
  stats: {
    visitsToday: 1,
    pendingTasks: 2
  }
};
