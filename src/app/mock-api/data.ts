import { countryManager, fieldMembers, regionalManager } from "../models/platform-model";

export const regionalManagerData: regionalManager = {
  name: 'Gabriel Wainaina',
  top_member: 'Alice Mwangi',
  total_orders: 15000,
  order_target: 20000,
  outlet_visitations: 5,
  stores: [
    { name: 'Quickmart Nairobi', location: 'Nairobi', assignedMember: 'Alice Mwangi' },
    { name: 'Naivas Westlands', location: 'Nairobi', assignedMember: 'Bob Otieno' },
    { name: 'Cleanshelf Thika', location: 'Nairobi', assignedMember: 'Catherine Wambui' }
  ],
  schedules: [
    { name: 'Naivas Westlands', date: '2025-07-30', time: '10:00 AM' },
    { name: 'Cleanshelf Thika', date: '2025-08-01' }
  ],
  region: 'Nairobi',

  field_members: [
    { name: 'Alice Mwangi', assignedStores: 5, assignedVisits: [
      { store: 'Quickmart Ngara', status: 'completed' },
      { store: 'Naivas Westlands', status: 'pending' },
      { store: 'Cleanshelf Thika', status: 'completed' }
    ], task_completion_rate: 90 },
    { name: 'Bob Otieno', assignedStores: 4, assignedVisits: [
      { store: 'Quickmart Malaba', status: 'completed' },
      { store: 'Naivas Nakuru', status: 'pending' },
    ] , task_completion_rate: 85 },
    { name: 'Catherine Wambui', assignedStores: 6, assignedVisits: [
      { store: 'Quickmart Nairobi', status: 'completed' },
      { store: 'Naivas Juja', status: 'pending' },
    ], task_completion_rate: 95 }
  ],  

};

export const countryManagerData:countryManager = {
  name: 'John Doe',
  regions:[
    { name:'Nairobi', manager:'John Doe'},
    { name:'Kakamega', manager:'Bien Aime'},
    { name:'Kisumu', manager:'Coster Ojwang'},
    { name:'Nakuru', manager:'Bobby Doe'}
  ],
  managers:[
    {
      name: 'John Doe',
      region: 'Nairobi',
      field_members: [],
      top_member: 'Bruce Lee',
      total_orders: 30450,
      order_target: 25000,
      outlet_visitations: 10,
      stores: [],
      schedules: []
    },
    {
      name: 'Bien Aime',
      region: 'Kakamega',
      field_members: [],
      top_member: 'Mark Twight',
      total_orders: 45000,
      order_target: 25000,
      outlet_visitations: 8,
      stores: [],
      schedules: []
    },
     {
      name: 'Coster Ojwang',
      region: 'Kisumu',
      field_members: [],
      top_member: 'Liam Wayne',
      total_orders: 22450,
      order_target: 25000,
      outlet_visitations: 8,
      stores: [],
      schedules: []
    },
  ],
  top_performing_region:'Nairobi',
  total_order_value:150000,
  monthly_order_target:2000000,
  total_outlet_visitations:400

 
};
export const fieldAgentData:fieldMembers = {
  name: 'Lewis Hamilton',
  assignedVisits: [
    { store: 'Quickmart Nairobi', status: 'completed' },
    { store: 'Naivas Westlands', status: 'pending' },
    { store: 'Cleanshelf Thika', status: 'pending' }
  ],
  assignedStores: 3,
  task_completion_rate: 75,
  todays_completed_tasks: 2,
  todays_total_tasks: 3,
  todays_order_value: 50000,
  todays_visitations: 1,
  todays_schedule: [
    { store: 'Quickmart Nairobi', date: '2025-07-30', startTime: '10:00 AM', endTime: '11:00 AM' },
    { store: 'Naivas Westlands', date: '2025-07-30', startTime: '12:00 PM', endTime: '1:00 PM' },
    { store: 'Cleanshelf Thika', date: '2025-07-30', startTime: '2:00 PM', endTime: '3:00 PM' }
  ]
 
};
