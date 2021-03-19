import { format } from 'date-fns'


const formatDate = (data) => { return format(data, 'dd/MM/yyyy') };


export default formatDate;