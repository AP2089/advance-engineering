export default (role: string | undefined) => {
  if (!role) return false;

  return ['ADMIN'].includes(role);
}