export const environment = {
  production: true,
  loginUrl: '/api/accounts/login',
  registerUrl: '/api/accounts/register',
  complaints: '/api/secured/complaints',
  getComplaint: '/api/secured/complaints/${this.id}',
  addcomment: '/api/secured/complaints/${this.id}/comment',
  baseUrl: 'http://localhost:3000'

};
