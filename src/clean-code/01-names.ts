(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const _filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos
    class AbstractUser { }
    class UserMixin { }
    class UserImplementation { }
    interface IUser { }

    // Mejor
    class User { }
    interface User { }


    // TODO: Tarea
        
    // día de hoy - today
    const _today = new Date();
    
    // días transcurridos - elapsed time in days
    const _elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const _numerOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const _firstName = 'Fernando';
    
    // primer apellido - last name
    const _lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const _daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const _maxClassesPerStudent = 6;


})();
