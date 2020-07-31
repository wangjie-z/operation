import { HeaderTypeEnum } from '@/constants/enums/header-type.enum';
import { MethodTypeEnum } from '@/constants/enums/method-type.enum';

const prefix = process.env.VUE_APP_API_CORE_PREFIX + '/authorization';
const authorizationApi = {
  login: {
    url: prefix + '/login',
    method: MethodTypeEnum.POST.code,
    header: HeaderTypeEnum.AUTH.code
  },
  refreshToken: {
    url: prefix + '/token',
    method: MethodTypeEnum.POST.code,
    header: HeaderTypeEnum.BASE.code
  }
};

export default authorizationApi;