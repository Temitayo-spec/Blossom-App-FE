interface IUser {
  email: string;
  name?: string;
  password: string;
}

interface IAuthenticatedUser {
  email: string;
  name: string;
}

interface IColor {
  id: string;
  name: string;
  code: string;
}

interface IIcon {
  id: string;
  name: string;
  symbol: string;
}

interface ICategory {
  _id: string;
  name: string;
  color: IColor;
  icon: IIcon;
  user: IUser | string;
  isEditable: boolean;
}

interface ICategoryExtended {
  categories: ICategory[];
}


interface ICategoryRequest {
  id?: string;
  name: string;
  color: IColor;
  icon: IIcon;
}

interface ITask {
  _id: string;
  name: string;
  isCompleted: boolean;
  categoryId: string;
  createdAt: string;
  date: string;
}

interface ITaskRequest {
  name: string;
  isCompleted: boolean;
  categoryId: string;
  date: string;
}