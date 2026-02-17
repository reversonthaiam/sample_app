module ApplicationHelper
    # Returns the full title on a per-page basis.
    def full_title(page_title = '')
        base_title = "Ruby on Rails Tutorial Sample App"
        if page_title.empty?
        base_title
        else
        page_title + " | " + base_title
        end
    end
end

class TailwindPaginationRenderer < WillPaginate::ActionView::LinkRenderer
    def container_attributes
      { class: "flex justify-center items-center space-x-1 my-8" }
    end

    def page_number(page)
      if page == current_page
        tag(:span, page, class: "px-4 py-2 bg-indigo-600 text-black rounded-lg font-medium")
      else
        link(page, page, class: "px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors")
      end
    end

    def previous_page
      num = @collection.current_page > 1 && @collection.current_page - 1
      previous_or_next_page(num, @options[:previous_label], "previous_page")
    end

    def next_page
      num = @collection.current_page < @collection.total_pages && @collection.current_page + 1
      previous_or_next_page(num, @options[:next_label], "next_page")
    end

    protected

    def previous_or_next_page(page, text, classname)
      if page
        link(text, page, class: "px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors")
      else
        tag(:span, text, class: "px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed")
      end
    end

    def gap
      tag(:span, "...", class: "px-2 text-gray-500")
    end
end