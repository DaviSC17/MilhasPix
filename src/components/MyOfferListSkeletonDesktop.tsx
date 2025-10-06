export const MyOfferListSkeletonDesktop = ({
  skeletonRows,
}: {
  skeletonRows: number;
}) => {
  return (
    <tbody>
      {Array.from({ length: skeletonRows }).map((_, i) => (
        <tr
          key={i}
          className="flex justify-between px-0 py-4 items-center animate-pulse"
        >
          <td className="flex items-center justify-center gap-2 w-40">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="flex flex-col gap-1">
              <div className="w-20 h-3 bg-gray-300 rounded" />
              <div className="w-16 h-2 bg-gray-300 rounded" />
            </div>
          </td>

          <td className="w-40 h-3 bg-gray-300 rounded" />
          
          <td className="w-40 h-3 bg-gray-300 rounded" />

          <td className="w-40 h-3 bg-gray-300 rounded" />

          <td className="flex justify-center w-40">
            <div className="w-20 h-4 bg-gray-300 rounded-full" />
          </td>

          <td className="w-40 h-3 bg-gray-300 rounded flex justify-center" />
        </tr>
      ))}
    </tbody>
  );
};
