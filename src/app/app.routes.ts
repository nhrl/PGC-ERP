import { Routes } from '@angular/router';
import exp from 'constants';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/partials/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { OrderComponent } from './pages/order/order.component';
import { ReportComponent } from './pages/report/report.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Ps5Component } from './contents/inventory/ps5/ps5.component';
import { GamesComponent } from './contents/inventory/games/games.component';
import { AccessoriesComponent } from './contents/inventory/accessories/accessories.component';
import { AddFormComponent } from './contents/inventory/add-form/add-form.component';
import { PreparingComponent } from './contents/orders/preparing/preparing.component';
import { DeliverComponent } from './contents/orders/deliver/deliver.component';
import { CompleteComponent } from './contents/orders/complete/complete.component';
import { OrderItemComponent } from './contents/orders/order-item/order-item.component';
import { OverallComponent } from './contents/sales/overall/overall.component';
import { SalePs5Component } from './contents/sales/sale-ps5/sale-ps5.component';
import { SaleGamesComponent } from './contents/sales/sale-games/sale-games.component';
import { SaleAccessoriesComponent } from './contents/sales/sale-accessories/sale-accessories.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login',
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        children:[
            {
                path: 'overview',
                component: OverviewComponent,
                title: 'Overview',
            },
            {
                path: 'orders',
                component: OrderComponent,
                title: 'Order',
                children: [
                    {
                        path: 'order',
                        component: OrderItemComponent
                    },
                    {
                        path: 'preparing',
                        component: PreparingComponent
                    },
                    {
                        path: 'deliver',
                        component: DeliverComponent
                    },
                    {
                        path: 'complete',
                        component: CompleteComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent,
                title: 'Report',
                children: [
                    {
                        path:'overall',
                        component: OverallComponent
                    },
                    {
                        path:'ps5',
                        component: SalePs5Component
                    },
                    {
                        path:'games',
                        component: SaleGamesComponent
                    },
                    {
                        path:'accessories',
                        component: SaleAccessoriesComponent
                    }
                ]
            },
            {
                path: 'inventory',
                component: InventoryComponent,
                title: 'Inventory',
                children: [
                    {
                        path: 'ps5',
                        component: Ps5Component,
                    },
                    {
                        path: 'games',
                        component: GamesComponent,
                    },
                    {
                        path: 'accessories',
                        component: AccessoriesComponent,
                    },
                    {
                        path: 'add-item',
                        component: AddFormComponent
                    }
                ]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                title: 'Profile'
            }
        ]
    }
];

export default routes;
