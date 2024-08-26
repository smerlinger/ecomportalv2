export const getDateDifference = (inputDate: string): string => {
  const today = new Date();
  const date = new Date(inputDate);
  const diffTime = today.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);

  switch (true) {
    case diffDays === 0:
      return 'Today';
    case diffDays < 30:
      return `${diffDays} days ago`;
    default:
      return `${diffMonths} months ago`;
  }
};

export const getEmployeeRange = (count: number): string => {
  switch (true) {
    case count <= 100:
      return '1 - 100 Employees';
    case count > 100 && count <= 500:
      return '100 - 500 Employees';
    case count > 500 && count <= 2000:
      return '500 - 2000 Employees';
    case count > 2000 && count <= 5000:
      return '2000 - 5000 Employees';
    case count > 5000:
      return '5000+ Employees';
    default:
      return '';
  }
};

export const getSalaryDisplay = ({
  salaryMin,
  salaryMax,
}: {
  salaryMin: number;
  salaryMax: number;
}) => {
  switch (true) {
    case salaryMin === salaryMax:
      return `$${salaryMax}/yr`;
    case salaryMax == 0:
      return `Min. $${salaryMin}`;
    case salaryMin == 0:
      return `Max. $${salaryMax}`;
    default:
      return `$${salaryMin} - $${salaryMax}`;
  }
};

const capitalizeFirstLetter = (input: string) => {
  const lowercased = input.toLowerCase();
  return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
};

export const getLocation = ({
  city,
  location,
}: {
  city: string;
  location: string;
}): string => {
  switch (true) {
    case city.toLowerCase() == location.toLowerCase():
      return capitalizeFirstLetter(city);
    case city.toLowerCase() == 'hybrid':
      return 'Hybrid';
    case city.toLowerCase() == 'remote':
      return `${capitalizeFirstLetter(city)} ${capitalizeFirstLetter(
        location
      )}`;
    default:
      return `${capitalizeFirstLetter(city)}, ${capitalizeFirstLetter(
        location
      )}`;
  }
};

export const getDateText = (date: string): string => {
  const month = parseInt(date.slice(0, 2), 10);
  const day = parseInt(date.slice(3, 5), 10);
  const year = parseInt(date.slice(6, 10), 10);

  // Array of month names
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Return the formatted date
  return `${monthNames[month - 1]} ${day}, ${year}`;
};
