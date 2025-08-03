export interface PlatformModel {
}
export interface countryManager {
    name: string,
    regions:Array<any>,
    managers:Array<regionalManager>,
    top_performing_region:string,
    total_order_value:number,
    monthly_order_target:number,
    total_outlet_visitations:number
}

export interface regionalManager {
    name:string,
    region:string,
    field_members:Array<fieldMembers>
    top_member:string,
    total_orders:number,
    order_target:number,
    outlet_visitations:number
    stores:Array<any>
    schedules:Array<any>
    

}

export interface fieldMembers {
    name:string,
    assignedStores:number,
    assignedVisits:Array<any>,
    task_completion_rate:number,
    todays_completed_tasks?:number,
    todays_total_tasks?:number,
    todays_order_value?:number,
    todays_visitations?:number,
    todays_schedule?:Array<any>
}