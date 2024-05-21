const Roadmap = () => {
    return (
      <div className="w-full bg-white p-8 rounded-lg">
        <div className="px-20 mb-24 flex flex-col gap-6">
          <span className="bg-[#c340a02f] text-[#F178B6] py-2 px-3 text-sm rounded-md w-fit">
            Our Project
          </span>
          <h1 className="text-[36px] font-bold">Project Timeline</h1>
          <p className="text-gray-600 text-[24px]">A Comprehensive roadmap of Huddlee</p>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-l border-r p-8">Phase</th>
              <th className="border-l border-r p-4">Coming soon</th>
              <th className="border-l border-r p-4">Coming soon</th>
              <th className="border-l border-r p-4">Coming soon</th>
              <th className="border-l border-r p-4">Coming soon</th>
              <th className="border-l border-r p-4">Coming soon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-8">Phase 1</td>
              <td className="border p-4 bg-gray-100">MVP 1 Release</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
            </tr>
            <tr>
              <td className="border p-8">Phase 2</td>
              <td className="border p-4"></td>
              <td className="border p-4 bg-gray-100">MVP 2 Release</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
            </tr>
            <tr>
              <td className="border p-8">Phase 3</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4 bg-gray-100">Launch</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
            </tr>
            <tr>
              <td className="border p-8">Phase 4</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4 bg-gray-100">
                Pre-launch Prototype Test
              </td>
              <td className="border p-4"></td>
            </tr>
            <tr>
              <td className="border p-8">Phase 4</td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4"></td>
              <td className="border p-4 bg-gray-100">Beta Release</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Roadmap;
  