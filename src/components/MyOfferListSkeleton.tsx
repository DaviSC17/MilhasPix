export const MyOfferListSkeletonMobile = ({
  skeletonRows,
}: {
  skeletonRows: number;
}) => {
  return (
    <>
      {Array.from({ length: skeletonRows }).map((_, i) => (
        <table
          key={i}
          className="border border-[#D9D9D9] rounded-[1.25rem] flex flex-col w-full animate-pulse mb-4"
        >
          <thead className="border-b border-[#D9D9D9]">
            <tr className="flex justify-between p-3">
              <th className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded-full hidden min-[360px]:flex" />
                <div className="flex flex-col gap-1">
                  <div className="w-26 h-3 bg-gray-300 rounded" />

                </div>
              </th>
              <th className="flex flex-col gap-2">
                <div className="w-24 h-4 bg-gray-300 rounded-full self-end" />
                <div className="w-16 h-2 bg-gray-300 rounded ml-auto" />
              </th>
            </tr>
          </thead>

          <tbody className="p-3 space-y-2">
            <tr className="flex justify-between">
              <td className="w-20 h-3 bg-gray-300 rounded-full" />
              <td className="w-16 h-3 bg-gray-300 rounded-full" />
            </tr>
            <tr className="flex justify-between">
              <td className="w-10 h-3 bg-gray-300 rounded-full" />
              <td className="w-40 h-3 bg-gray-300 rounded-full" />
            </tr> 
            <tr className="flex justify-between">
              <td className="w-28 h-3 bg-gray-300 rounded-full" />
              <td className="w-20 h-3 bg-gray-300 rounded-full" />
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
