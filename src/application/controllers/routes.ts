import { Routes } from '@nestjs/core';
import { AuthControllerModule } from './auth/auth-controller.module';

const routes: Routes = [
  {
    path: '/filter-max',
    children: [
      {
        path: '/admin',
        children: [],
      },
      {
        path: '/upload',
        children: [],
      },
    ],
  },
  {
    path: '/auth',
    children: [AuthControllerModule],
  },
];

export default routes;
